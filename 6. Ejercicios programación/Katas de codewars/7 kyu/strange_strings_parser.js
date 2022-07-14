/* Instructions:

Here you have a connected to a socket, and the data looks very strange.
It seems to be separated by a random special character! Oh No!
We need your help to find the special character, parse the data, and return it translated!
There isn't much time, hurry we need your help!

Example:   ["320000;56C:7200RPM#MODE%65>LATCH?ON"] =>  ["320000","56C","7200RPM","MODE","65","LATCH","ON"]);

*/



const wordSplitter = str => {
  
        return str.replace(/[:|@#~¬"$%&/()=?¿^*¨Ç+!¡;><\']/g, " ").split(" ")

}