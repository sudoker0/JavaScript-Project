"use strict";

/*
    UnderJScript (Also know as _) is a JavaScript plug-in that add new feature to JavaScript, making coding easier
    Here's the thing: This "library" is more of a compilation of code that I use in my website and because I feel like those code are pretty useful.
    I decide to put it into one place. Of course, most of the code are gathered from website like StackOverFlow, etc. And there are code that might not work
    in certain version of browser to I am not 100% sure that most of the code is usable in certain browser. But it should work in the latest browser.
    Version: 0.2_Alpha
                        #@@@@@@@%
                        #@@@@@@@%
                    %@@@&&&&&&&&&@@@@
                    %@@@&&&&&&&&&@@@@
                @@@@%%%%&&&&&@@@@@@@@@@@@
            @@@@&&&&&&&&&&&&&&&&&@@@@@@@@@@@@.
            @@@@&&&&&&&&&&&&&&&&&@@@@@@@@@@@@.
        ,@@@@&&&&&&&&&&&&&&&&&&&&&@@@@@@@@%%%%&@@@*
        ,@@@@&&&&&&&&&&&&&&&&&&&&&@@@@@@@@%%%%&@@@*
    @@@@%%%%%&&&&&&&&@@@@&&&&&%%%%@@@@@@@@@@@@@@@@@@@@
    @@@@&&&&&@@@@&&&&&&&&&&&&&&&&&@@@@@@@@@@@@@@@@@@@@
    @@@@&&&&&@@@&&&&&&&&&&&&&&&&&&@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@&&&&%%%%&&&&&&&&&&&&&@@@@@@@@@@@@@@@@@@@@
    ####%@@@@&&&&%%%%&&&&&&&&&&&&&@@@@@@@@&&&&@@@@&###
        ,@@@@@@@@@@@@&&&&&&&&&@@@@@@@@@@@@%%%%&@@@*
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.
                    %@@@@@@@@@@@@@@@@
                    %@@@@@@@@@@@@@@@@
    =-=-=-=-=-=-=-All Hail The Redstone!-=-=-=-=-=-=-=
*/

/**
 * UnderJScript
 */
var _ = underjscript = function underjscript() {
  var func = {};
  /**
   * Create random string with any length that contain any character that you specify
   * * Source: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
   * * Answer: https://stackoverflow.com/a/1349426
   * > (Answer has been modified to allow for customization)
   * @param {number} length - The length of the random string
   * @param {string} contained_character - If custom is specify in the type
   */

  func.createRandomString = function (length, contained_character) {
    var characters = contained_character;
    var result = '';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };
  /**
   * Get the content of the data you want in a query string
   * * Source: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
   * * Answer: https://stackoverflow.com/a/901144
   * > (Answer has not been modified)
   * @param {string} name - Search in the query string for the name you specify and get the data
   * @param {string} url - Specify different url string if don't want to use the current url string
   */


  func.getParameterByName = function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };
  /**
   * Read the content of a file (Mostly text) from the server directly
   * * Source: https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
   * * Answer: https://stackoverflow.com/a/14446538
   * > (Answer has been modified to allow for callback, mimetype customization)
   * @param {string} filename - The name of the file that you want to get
   * @param {string} mimetype - The MIME type of the file (https://www.iana.org/assignments/media-types/media-types.xhtml)
   * @param {function} callback - The function that will be handle the file content
   */


  func.readTextFile = function (filename, mimetype, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType(mimetype);
    rawFile.open("GET", filename, true);

    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    };

    rawFile.send(null);
  };
  /**
   * Standardize color from rgb, rgba, color name to hex
   * * Source: https://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes/24390910
   * * Answer: https://stackoverflow.com/a/47355187
   * > (Answer has slightly modified (variable name))
   * @param {string} string - The color string that you want to convert to hex
   */


  func.convertcolortohex = function (string) {
    var ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = string;
    return ctx.fillStyle;
  };
  /**
   * Generate the most annoying sound in your life, with flavor of course
   * * Source: Currently unknow (I think it's come from StackOverFlow)
   * * Answer: Unknow
   * @param {number} vol - The volume of the waveform
   * @param {number} freq - The frequency of the waveform
   * @param {number} duration - The duration of the waveform (In Miliseconds)
   * @param {string} type - The type of the waveform (Accepted type: sine, square, sawooth, triangle)
   */


  func.playbeep = function (vol, freq, duration, type) {
    a = new AudioContext();
    v = a.createOscillator();
    u = a.createGain();
    v.connect(u);
    v.frequency.value = freq;
    v.type = type;
    u.connect(a.destination);
    u.gain.value = vol * 0.01;
    v.start(a.currentTime);
    v.stop(a.currentTime + duration * 0.001);
  };
  /**
   * Convert from ASCII string to hex string
   * * Source: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-27.php
   * > (Function has been modified slightly (function name and variable name))
   * @param {string} input - The ASCII string that you want to convert to hex string
   */


  func.texttohex = function (input) {
    var arr1 = [];

    for (var n = 0, l = input.length; n < l; n++) {
      var hex = Number(input.charCodeAt(n)).toString(16);
      arr1.push(hex);
    }

    return arr1.join('');
  };
  /**
   * Convert from hex string to ASCII string
   * * Source: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-28.php
   * > (Function has been modified slightly (function name and variable name))
   * @param {string} input - The Hex string that you want to convert to ASCII string
   */


  func.hextotext = function (input) {
    var hex = input.toString();
    var str = '';

    for (var n = 0; n < hex.length; n += 2) {
      str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }

    return str;
  };
  /**
   * * Source: https://gist.github.com/belohlavek/90771ccccb11100e76d1
   * > (Part of code has been take to create the function)
   * Convert from ASCII string to binary string
   * @param {string} input - The ASCII string that you want to convert to binary string
   */


  func.texttobinary = function (input) {
    var result = "";

    for (var i = 0; i < input.length; i++) {
      var bin = input[i].charCodeAt().toString(2);
      result += Array(8 - bin.length + 1).join("0") + bin;
    }

    return result;
  };
  /**
   * * Source: https://gist.github.com/belohlavek/90771ccccb11100e76d1
   * > (Part of code has been take to create the function)
   * Convert from binary string to ASCII string
   * @param {string} input - The binary string that you want to convert to ASCII string
   */


  func.binarytotext = function (input) {
    var result = "";
    var arr = input.match(/.{1,8}/g);

    for (var i = 0; i < arr.length; i++) {
      result += String.fromCharCode(parseInt(arr[i], 2).toString(10));
    }

    return result;
  };
  /**
   * Open a "Open" dialog, get the content of the file as Base64 format (To avoid both binary and text handling stuff bull$hit)
   * * Source:
   * * * https://stackoverflow.com/questions/3582671/how-to-open-a-local-disk-file-with-javascript/16912374
   * * * https://jsfiddle.net/LacunaSoftware/xxowbycb
   * * Answer: https://stackoverflow.com/a/50782106
   * > (Code from both sources has been merged and modified)
   * @param {function} handlefilefunction - The function that will be handle the file content
   * @param {string} acceptMimeType - The MIME type of the file (https://www.iana.org/assignments/media-types/media-types.xhtml)
   */


  func.getFileFromUserAsBase64 = function (handlefilefunction, acceptMimeType) {
    function handleFileSelect(e) {
      var files = e.target.files;

      if (files.length < 1) {
        alert('select a file...');
        return;
      }

      var file = files[0];
      var reader = new FileReader();
      reader.onload = onFileLoaded;
      reader.readAsDataURL(file);
    }

    function clickElem(elem) {
      var eventMouse = document.createEvent("MouseEvents");
      eventMouse.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      elem.dispatchEvent(eventMouse);
    }

    function onFileLoaded(e) {
      var match = /^data:(.*);base64,(.*)$/.exec(e.target.result);

      if (match == null) {
        throw 'Could not parse result'; // should not happen
      }

      var mimeType = match[1];
      var content = match[2];
      handlefilefunction(mimeType, content);
    }

    fileInput = document.createElement("input");
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    fileInput.accept = acceptMimeType;
    fileInput.onchange = handleFileSelect;
    fileInput.func = func;
    document.body.appendChild(fileInput);
    clickElem(fileInput);
  };
  /**
   * Open a save dialog to allow user to download a file with the content that you specify
   * * Source: https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
   * * Answer: https://stackoverflow.com/a/60157847
   * * (Answer has been slightly modfified (function and variable name))
   * @param {*} content - The file content that you want to save to the user
   * @param {string} mimeType - The MIME type of the file (https://www.iana.org/assignments/media-types/media-types.xhtml)
   * @param {string} fileName - The name of the file
   */


  func.saveFileToUserComputer = function (content, mimeType, fileName) {
    var a = document.createElement('a');
    var blob = new Blob([content], {
      type: mimeType
    });
    var url = URL.createObjectURL(blob);
    a.setAttribute('href', url);
    a.setAttribute('download', fileName);
    a.click();
  };
  /**
   * Check if the user is using mobile browser
   * * Source: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
   * * Answer: https://stackoverflow.com/a/11381730Z
   * * Credit to: http://detectmobilebrowsers.com
   * * (Answer has not been modified)
   */


  func.isUserUsingMobile = function () {
    var check = false;

    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);

    return check;
  };
  /**
   * Check if the user is online
   * * Source: Me (with the help of the Internet)
   * @returns {Boolean}
   */


  func.isOnline = function () {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function () {
      return true;
    };

    xmlhttp.onerror = function () {
      return false;
    };

    xmlhttp.open("GET", window.location.href + "?" + Math.floor(Math.random() * 0xFFFF).toString(16) + "=" + Math.floor(Math.random() * 0xFFFF).toString(16), true);
    xmlhttp.send();
  };
  /**
   * Some random bull$hit that I can't think of anything to add
   * * Source: Me
   */


  func.aninsanlylongfunctionnamethatisveryuselessandpleasedeletethisfunctionorelsethiscodewillbetoolongtotypeandalsopleasedonotrunthisfunctionorelsethiscodewillcrash = function () {
    console.log("I already told you to not run this function, now this code will crash");
    setTimeout(function () {
      while (1) {
        console.log("crash!");
      }
    }, 100);
  };
  /**
   * Allow user to console.log with color
   * * Source: Me (with the help of Internet)
   * @param {array} input - Syntax: [{"text": <text>, "style": <css_code_for_styling>},...]
   */


  func.colorlog = function (input) {
    var output = "",
        array = [];

    for (var i = 0; i < input.length; i++) {
      output += "%c" + input[i].text;
      array.push(input[i].style);
    }

    array.unshift(output);
    console.log.apply(console, [].concat(array));
  };

  return func;
};