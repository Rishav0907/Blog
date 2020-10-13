import 'dart:async';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:camera/camera.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' show join;

Future<void> main() async{
  WidgetsFlutterBinding.ensureInitialized(); // used to ensure that the plugins are initialized
  final camera=await availableCameras(); // list all the cameras
  print(camera[0]);
  runApp(
    MaterialApp(
      home: CameraScreen(camera: camera.first,),
    )
  );
}

class CameraScreen extends StatefulWidget {
  final CameraDescription camera;
  const CameraScreen({
    Key key,
    @required this.camera
  }): super(key:key);
  @override
  _CameraScreenState createState() => _CameraScreenState();
}

class _CameraScreenState extends State<CameraScreen> {

  CameraController _controller;
  Future _initializeControllerFuture;

  @override
  void initState(){
    super.initState();
    _controller=CameraController(
      widget.camera,
      ResolutionPreset.ultraHigh // defines the resolution
    );
    _initializeControllerFuture=_controller.initialize(); // initilaize the controller
  }

  @override
  void dispose(){
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Camera'),),
      body: FutureBuilder<void>(
        future: _initializeControllerFuture,
        builder: (context,snapshot) {
          if(snapshot.connectionState==ConnectionState.done)
          {
            return CameraPreview(_controller);
          }
          else
          {
            return Center(child: CircularProgressIndicator());
          }
        },
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.camera_alt),
        onPressed: () async {
          try {
            await _initializeControllerFuture;

            final path=join(
              (await getTemporaryDirectory()).path,
              '${DateTime.now()}.png'
            );
            await _controller.takePicture(path);
             Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => DisplayPictureScreen(imagePath: path),
              )
              );
          }
          catch(e){
            print(e);
          }
        },
      ),
    );
  }
}
class DisplayPictureScreen extends StatelessWidget {
  final String imagePath;

  const DisplayPictureScreen({Key key, this.imagePath}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Display the Picture')),
      // The image is stored as a file on the device. Use the `Image.file`
      // constructor with the given path to display the image.
      body: Image.file(File(imagePath)),
    );
  }
}