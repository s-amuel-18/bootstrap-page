(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = youtubeVideo;
/**
*   @fileoverview
*     Componente para incrustar un video de YouTube en nuestro sitio web cuando la resolución es mayor a 64em (1024px), cuando es menor se agrega un enlace al video
*     Dependencias: font-awesome
*
*   @param {String} id, id del video de YouTube, se define en el archivo pug
*   @param {String} $video-width, anchura del contenedor del video, se define en el archivo scss
*
*   @returns {void} no retorna nada
*
*   @author Jonathan MirCha <jonmircha@gmail.com>
*   @version 1.0.0
*/
function youtubeVideo() {
  var d = document,
      w = window,
      mq = w.matchMedia('(min-width: 64em)'),
      youtube = d.querySelectorAll('.Youtube'),
      youtubeWrapper = d.querySelectorAll('.Youtube-wrapper'),
      youtubeIds = [],
      youtubeIframe = [];

  youtube.forEach(function (video, index) {
    return youtubeIds[index] = video.id;
  });

  console.log(youtubeIds);

  function showVideo(mq) {
    if (mq.matches) {
      youtubeWrapper.forEach(function (video, index) {
        video.innerHTML = '<iframe src="https://www.youtube.com/embed/' + youtubeIds[index] + '" frameborder="0"></iframe>';
      });
    } else {
      youtubeWrapper.forEach(function (video, index) {
        video.innerHTML = '<a href="https://www.youtube.com/watch?v=' + youtubeIds[index] + '" target="_blank"><i class="fa fa-youtube-play"></i> Ver Video</a>';
      });
    }
  }

  mq.addListener(showVideo);
  showVideo(mq);
}

},{}],2:[function(require,module,exports){
'use strict';

var _youtube_video = require('./components/youtube_video');

var _youtube_video2 = _interopRequireDefault(_youtube_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _youtube_video2.default)();

},{"./components/youtube_video":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy95b3V0dWJlX3ZpZGVvLmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDYXdCLFk7QUFieEI7Ozs7Ozs7Ozs7Ozs7QUFhZSxTQUFTLFlBQVQsR0FBeUI7QUFDdEMsTUFBTSxJQUFJLFFBQVY7QUFBQSxNQUNFLElBQUksTUFETjtBQUFBLE1BRUUsS0FBSyxFQUFFLFVBQUYsQ0FBYSxtQkFBYixDQUZQO0FBQUEsTUFHRSxVQUFVLEVBQUUsZ0JBQUYsQ0FBbUIsVUFBbkIsQ0FIWjtBQUFBLE1BSUUsaUJBQWdCLEVBQUUsZ0JBQUYsQ0FBbUIsa0JBQW5CLENBSmxCO0FBQUEsTUFLRSxhQUFhLEVBTGY7QUFBQSxNQU1FLGdCQUFnQixFQU5sQjs7QUFRQSxVQUFRLE9BQVIsQ0FBZ0IsVUFBQyxLQUFELEVBQVEsS0FBUjtBQUFBLFdBQWtCLFdBQVcsS0FBWCxJQUFvQixNQUFNLEVBQTVDO0FBQUEsR0FBaEI7O0FBRUEsVUFBUSxHQUFSLENBQWEsVUFBYjs7QUFFQSxXQUFTLFNBQVQsQ0FBb0IsRUFBcEIsRUFBd0I7QUFDdEIsUUFBSSxHQUFHLE9BQVAsRUFBZ0I7QUFDZCxxQkFBZSxPQUFmLENBQXVCLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDdkMsY0FBTSxTQUFOLG1EQUFnRSxXQUFXLEtBQVgsQ0FBaEU7QUFDRCxPQUZEO0FBR0QsS0FKRCxNQUlPO0FBQ0wscUJBQWUsT0FBZixDQUF1QixVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQ3ZDLGNBQU0sU0FBTixpREFBOEQsV0FBVyxLQUFYLENBQTlEO0FBQ0QsT0FGRDtBQUdEO0FBQ0Y7O0FBRUQsS0FBRyxXQUFILENBQWUsU0FBZjtBQUNBLFlBQVUsRUFBVjtBQUNEOzs7OztBQ3hDRDs7Ozs7O0FBRUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiogICBAZmlsZW92ZXJ2aWV3XG4qICAgICBDb21wb25lbnRlIHBhcmEgaW5jcnVzdGFyIHVuIHZpZGVvIGRlIFlvdVR1YmUgZW4gbnVlc3RybyBzaXRpbyB3ZWIgY3VhbmRvIGxhIHJlc29sdWNpw7NuIGVzIG1heW9yIGEgNjRlbSAoMTAyNHB4KSwgY3VhbmRvIGVzIG1lbm9yIHNlIGFncmVnYSB1biBlbmxhY2UgYWwgdmlkZW9cbiogICAgIERlcGVuZGVuY2lhczogZm9udC1hd2Vzb21lXG4qXG4qICAgQHBhcmFtIHtTdHJpbmd9IGlkLCBpZCBkZWwgdmlkZW8gZGUgWW91VHViZSwgc2UgZGVmaW5lIGVuIGVsIGFyY2hpdm8gcHVnXG4qICAgQHBhcmFtIHtTdHJpbmd9ICR2aWRlby13aWR0aCwgYW5jaHVyYSBkZWwgY29udGVuZWRvciBkZWwgdmlkZW8sIHNlIGRlZmluZSBlbiBlbCBhcmNoaXZvIHNjc3NcbipcbiogICBAcmV0dXJucyB7dm9pZH0gbm8gcmV0b3JuYSBuYWRhXG4qXG4qICAgQGF1dGhvciBKb25hdGhhbiBNaXJDaGEgPGpvbm1pcmNoYUBnbWFpbC5jb20+XG4qICAgQHZlcnNpb24gMS4wLjBcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB5b3V0dWJlVmlkZW8gKCkge1xuICBjb25zdCBkID0gZG9jdW1lbnQsXG4gICAgdyA9IHdpbmRvdyxcbiAgICBtcSA9IHcubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNjRlbSknKSxcbiAgICB5b3V0dWJlID0gZC5xdWVyeVNlbGVjdG9yQWxsKCcuWW91dHViZScpLFxuICAgIHlvdXR1YmVXcmFwcGVyID1kLnF1ZXJ5U2VsZWN0b3JBbGwoJy5Zb3V0dWJlLXdyYXBwZXInKSxcbiAgICB5b3V0dWJlSWRzID0gW10sXG4gICAgeW91dHViZUlmcmFtZSA9IFtdXG5cbiAgeW91dHViZS5mb3JFYWNoKCh2aWRlbywgaW5kZXgpID0+IHlvdXR1YmVJZHNbaW5kZXhdID0gdmlkZW8uaWQpXG5cbiAgY29uc29sZS5sb2coIHlvdXR1YmVJZHMgKVxuXG4gIGZ1bmN0aW9uIHNob3dWaWRlbyAobXEpIHtcbiAgICBpZiAobXEubWF0Y2hlcykge1xuICAgICAgeW91dHViZVdyYXBwZXIuZm9yRWFjaCgodmlkZW8sIGluZGV4KSA9PiB7XG4gICAgICAgIHZpZGVvLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7eW91dHViZUlkc1tpbmRleF19XCIgZnJhbWVib3JkZXI9XCIwXCI+PC9pZnJhbWU+YFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgeW91dHViZVdyYXBwZXIuZm9yRWFjaCgodmlkZW8sIGluZGV4KSA9PiB7XG4gICAgICAgIHZpZGVvLmlubmVySFRNTCA9IGA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0ke3lvdXR1YmVJZHNbaW5kZXhdfVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmEgZmEteW91dHViZS1wbGF5XCI+PC9pPiBWZXIgVmlkZW88L2E+YFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBtcS5hZGRMaXN0ZW5lcihzaG93VmlkZW8pO1xuICBzaG93VmlkZW8obXEpO1xufVxuIiwiaW1wb3J0IHlvdXR1YmVWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMveW91dHViZV92aWRlbydcblxueW91dHViZVZpZGVvKCkgIl19
