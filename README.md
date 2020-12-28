# OVMS-Fireplace

![OVMS-Fireplace](fp.jpg)

This is a very simple app to turn the climate control on or off via OVMS, if your OVMS vehicle module is capable of climatecontrol on and off and are using a V2 server.

The app works only in combination with the Android OVMS app. Within the OVMS app you'll need to activate The "vehicle commands" function at "Options".

In the OVMS-Fireplace app you need to enter the vehicle-id and the password you use for that id. You do that by tapping on the yellow bar and then enter the id, tap OK anf then enter the password. After you tapped OK again, id and password are stored on your device. Warning: the password is stored plain text on your device. If you are not comfortable with that, don't use this app.

Once the credentials are stored, you can use the app. Therefor you first need to start the OVMS app. Now you can tap on the fireplace in the OVMS-Fireplace app and the climatecontrol on command is send to the OVMS app and from there to the server and to the car. In the OVMS-Fireplace app the yellow bar starts counting down for 17 seconds. In this buffer time no commands are accepted from the app. After those 17 seconds the fireplace starts "moving" and you can hear a tickling sound. The heater should have startet by now in the car :-)

To stop the heater, just tap again on the fireplace. A red bar will come up on the top of the screen and all commands will be blocked for 10 seconds. After that time the yellow bar will appear and you can start another session if needed.

As I wrote this is a very simple app. There are no plausibility checks within the app. You won't get any response if anything is wrong for the app (i.e. wrong id or password), but if you set up everything in the right way, the app will work.  

There is also no response within the app if the car turns off the heater. The app will continue to show the fire with the tickling sound. 

An other issue is, that the app does not keep the display on. You can use Androids build in "Coffein" function for that.

You can find an unsigned debug apk here:
https://github.com/devmarxx/OVMS-Fireplace/blob/main/platforms/android/app/build/outputs/apk/debug/app-debug.apk

