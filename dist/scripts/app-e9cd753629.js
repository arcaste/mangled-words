!function(){"use strict";angular.module("mangledWords",["ngSanitize","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(t,e){function n(n){var r=e.defer();return t.get(n).then(function(t){return r.resolve(t.data)},function(t){return r.reject(t.status)}),r.promise}function r(n,r){var o=e.defer();return t.post(n,r).then(function(t){return o.resolve(t.data)},function(t){return o.reject(t.status)}),o.promise}var o={get:n,post:r};return o}angular.module("mangledWords").factory("httpService",t),t.$inject=["$http","$q"]}(),function(){"use strict";function t(t,e,n){function r(){a(),t(function(){i.classAnimation="rubberBand"},4e3)}function o(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function a(){i.awesomeThings=e.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1485901589666,i.showToastr=o,r()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("mangledWords").controller("MainController",t)}(),function(){"use strict";function t(t,e,n){function r(){return t.get(e.BASE+e.PLAYERS).then(function(t){return console.log(t),t=n.sortBy(t,"score").reverse(),console.log(t),t},function(t){return void console.log("Error status: "+t)})}var o={getPlayers:r};return o}angular.module("mangledWords").factory("highscoreService",t),t.$inject=["httpService","URL","_"]}(),function(){"use strict";function t(t){console.log(t);var e=this;e.players=t}angular.module("mangledWords").controller("HighScoreController",t),t.$inject=["players"]}(),function(){"use strict";function t(){var t={templateUrl:"app/components/highscore/highscore-table-row.html",restrict:"A",replace:!0};return t}angular.module("mangledWords").directive("tableRow",t)}(),function(){"use strict";function t(t){return{link:function(e,n){var r;r=t,e.$watch("game.gameStarted",function(e){if(e)var o=setInterval(function(){r>0?(r--,n.text(r)):(r=t,n.text(r),clearInterval(o))},1e3);else n.text(r)})}}}angular.module("mangledWords").directive("gameTimer",t),t.$inject=["TIMER"]}(),function(){"use strict";function t(t,e){function n(){return t.get(e.BASE+e.WORDS).then(function(t){console.log(t);for(var e,n=t.length;n>0;){e=Math.floor(Math.random()*n),n--;var r=t[n];t[n]=t[e],t[e]=r}return t},function(t){return void console.log("Error status: "+t)})}var r={getWords:n};return r}angular.module("mangledWords").factory("gameService",t),t.$inject=["httpService","URL"]}(),function(){"use strict";function t(t){function e(e){return t.open({controller:"GameModalController",controllerAs:"modal",templateUrl:"app/components/game/game.modal.html",size:"mg",backdrop:"static",resolve:{score:e}})}var n={open:e};return n}function e(t,e,n,r){function o(){console.log(a.name+" "+a.score);var e={name:a.name,score:a.score};n.post(r.BASE+r.PLAYERS+r.TOKEN,e).then(function(e){console.log(e),t.close()},function(e){console.log("Error status: "+e),t.close()})}var a=this;a.cancel=t.dismiss,a.confirm=o,a.name="",a.score=e}angular.module("mangledWords").controller("GameModalController",e).factory("gameModalService",t),t.$inject=["$uibModal"],e.$inject=["$uibModalInstance","score","httpService","URL"]}(),function(){"use strict";function t(t,e,n,r){function o(){d.gameStarted=!1,d.dangerAlert=!1,d.successAlert=!1,d.index=0,d.input="",d.inputTmp="",d.mangledWord="....",d.originalWord="";for(var t,e=n.length;e>0;){t=Math.floor(Math.random()*e),e--;var r=n[e];n[e]=n[t],n[t]=r}}function a(){d.gameStarted=!0,d.maxScore=0,d.penality=0,d.mangledWord=u(n[d.index]),d.originalWord=n[d.index],d.title="Game Started!",d.subTitle="Good luck...",t(function(){o(),e.open(d.maxScore)},1e3*r)}function i(){d.successAlert?d.successAlert=!1:d.dangerAlert&&(d.dangerAlert=!1),d.input.length<d.inputTmp.length&&s(d.inputTmp.length-d.input.length),d.input=d.input.replace(/ /g,""),d.input.match(/^[A-zÀ-ÿ]+$/)?d.input=d.input.toUpperCase():d.input=d.input.slice(0,-1),d.inputTmp=d.input,d.input.length===d.originalWord.length&&l()}function l(){d.input===d.originalWord.toUpperCase()?(d.successAlert=!0,c(),d.index++,d.penality=0,n.length!==d.index&&(d.mangledWord=u(n[d.index]),d.originalWord=n[d.index])):(d.dangerAlert=!0,s(d.input.length)),d.input="",d.inputTmp=""}function s(t){d.penality+=t,d.penality>d.originalWord.length&&(d.penality=d.originalWord.length)}function c(){var t=Math.floor(Math.pow(1.95,d.originalWord.length/3))-d.penality;t>0&&(d.maxScore+=t)}function u(t){do for(var e,n=t.split(""),r=n.length;r>0;){e=Math.floor(Math.random()*r),r--;var o=n[r];n[r]=n[e],n[e]=o}while(n.join("")===t);return n.join("")}var d=this;d.inputChanged=i,d.startNewGame=a,d.submitWord=l,d.gameStarted=!1,d.index=0,d.input="",d.inputTmp="",d.maxScore=0,d.mangledWord="....",d.originalWord="",d.penality=0,d.dangerAlert=!1,d.successAlert=!1,d.triggerTimer=!1,d.title="Game",d.subTitle="Check your score or if you haven't play yet... give it a try!",d.wrongAnswer=!1}angular.module("mangledWords").controller("GameController",t),t.$inject=["$timeout","gameModalService","words","TIMER"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("mangledWords").run(t)}(),function(){"use strict";function t(t,r){t.state("main",{url:"/main",templateUrl:"app/components/main/main.html"}).state("game",{url:"/game",templateUrl:"app/components/game/game.html",controller:"GameController",controllerAs:"game",resolve:{words:e}}).state("highscore",{url:"/highscore",templateUrl:"app/components/highscore/highscore.html",controller:"HighScoreController",controllerAs:"hs",resolve:{players:n}}),r.otherwise("/main")}function e(t){return t.getWords()}function n(t){return t.getPlayers()}angular.module("mangledWords").config(t),t.$inject=["$stateProvider","$urlRouterProvider"],e.$inject=["gameService"],n.$inject=["highscoreService"]}(),function(){"use strict";angular.module("mangledWords").constant("TIMER",40).constant("URL",{BASE:"https://mangledwords-e183b.firebaseio.com/",PLAYERS:"players.json",WORDS:"words.json",TOKEN:"?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0ODYwNTc1MTgsImV4cCI6MTQ4NjA2MTExOCwiYWRtaW4iOnRydWUsInYiOjB9.ICOijr_VVhBydLrKjxn-YSsWuAo9GnT90UvZuEsiHxE"}).constant("_",window._).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("mangledWords").config(t)}(),angular.module("mangledWords").run(["$templateCache",function(t){t.put("app/components/game/game.html",'<div class="jumbotron text-center"><div class=game-timer><div class=game-timer-label>TIMER</div><span game-timer></span></div><div class=game-score><div class=game-score-label>SCORE</div><span>{{game.maxScore}}</span></div><div class=game-word>{{game.mangledWord}}</div><div class=game-container><input class="game-input input-lg" ng-disabled=!game.gameStarted type=text ng-model=game.input ng-change=game.inputChanged()></div><!--     <p>\r\n        <button ng-disabled="gameForm.$invalid" ng-click="game.submitWord()" type="button" class="btn btn-lg btn-block" ng-class="game.wrongAnswer ? \'btn-danger\' : \'btn-primary\'">\r\n            <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>\r\n        </button>\r\n    </p> --><!-- </form> --><p class="alert alert-success" role=alert ng-show=game.successAlert>Correct! You unmangled the word.</p><p class="alert alert-danger" role=alert ng-show=game.dangerAlert>Oh no! Wrong answer.</p><p class="alert alert-warning" role=alert ng-hide="game.dangerAlert || game.successAlert">Unmangle the word and watch out for the time.</p><div class=row><div class=col-xs-6><button ng-disabled=game.gameStarted ng-click=game.startNewGame() type=button class="btn btn-primary btn-lg btn-block">Start</button></div><div class=col-xs-6><button ui-sref=main ui-sref-active=active ng-disabled=game.gameStarted type=button class="btn btn-default btn-lg btn-block">Back</button></div></div></div>'),t.put("app/components/game/game.modal.html",'<div class="modal-header text-center"><h1 class=modal-title>Save your score</h1><div class=game-score>{{modal.score}}</div></div><form name=modalForm><div class="modal-body text-center"><input type=text class="form-control input-lg" ng-model=modal.name placeholder="Your name" required></div><div class="modal-footer text-center"><div class=row><div class=col-xs-6><button class="btn btn-lg btn-block btn-primary" ng-disabled=modalForm.$invalid ng-click=modal.confirm()>Submit</button></div><div class=col-xs-6><button class="btn btn-lg btn-block btn-default" ng-click=modal.cancel()>Cancel</button></div></div></div></form>'),t.put("app/components/highscore/highscore-table-row.html","<tr><td>{{$index+1}}</td><td>{{player.score}}</td><td>{{player.name}}</td></tr>"),t.put("app/components/highscore/highscore.html",'<div class="jumbotron text-center"><h1>Highscore</h1><br><p>Check your score or if you haven\'t play yet... give it a try!</p><p><button ui-sref=main ui-sref-active=active type=button class="btn btn-primary btn-lg btn-block">Back</button></p></div><div class=table-responsive><table class="table table-striped text-center"><thead><tr><th class=text-center>Rank</th><th class=text-center>Score</th><th class=text-center>Name</th></tr></thead><tbody><tr table-row ng-repeat="player in hs.players"></tr></tbody></table></div>'),t.put("app/components/main/main.html",'<div class="jumbotron text-center"><h1>Mangled words</h1><br><p>Check your score or if you haven\'t play yet... give it a try!</p><p><button ui-sref=highscore ui-sref-active=active type=button class="btn btn-primary btn-lg btn-block">Highscore</button></p><p><button ui-sref=game ui-sref-active=active type=button class="btn btn-primary btn-lg btn-block">Play the game</button></p></div>')}]);
//# sourceMappingURL=../maps/scripts/app-e9cd753629.js.map