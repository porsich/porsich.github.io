'use strict';

angular.module('task13App')
  .controller('AboutCtrl', function($scope, $routeParams, $sce) {
    $scope.title = $routeParams.title;
    $scope.maxNumberOfEpisodes = $routeParams.maxNumberOfEpisodes;
    $scope.numberOfSeasons = $routeParams.numberOfSeasons;
    $scope.currentSeason = $routeParams.currSeason;
    $scope.currentEpisode = $routeParams.currEpisod;

    /*
      $scope.menuBuilder()
      Метод предназначенный для автоматической генерации количества сезонов и серий.
    */

    $scope.menuBuilder = function() {
      $scope.arrayOfTheNumberOfSeasons = [];
      $scope.arrayOfTheNumberOfEpisodes = [];

      for (var i = 1; i <= $routeParams.numberOfSeasons; i++) {
        $scope.arrayOfTheNumberOfSeasons.push({
          id: i
        });
      };

      for (var i = 1; i <= $routeParams.maxNumberOfEpisodes; i++) {
        $scope.arrayOfTheNumberOfEpisodes.push({
          id: i
        });
      };
    };

    /*
      $scope.trustSrc
      Метод, предназначенный для вывода видео в iframe
    */

    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    };

    /*
      $scope.onLoadPage()
      Основной метод скрипта, предназначенный для выбора из вконтакте нужной серии
      и вывода ее на страницу, а также для вывода этой же серии из других источников.
    */

    $scope.onLoadPage = function() {
      /*
        function findPartial()
        Метод для выделения нужного заголовка по массиву значений на точное вхождение онных
        из выдачи
      */

      function findPartial(query, array) {
        $scope.emptyArray = [];
        for (var i = 0; i < query.length; ++i) {
          if (query.indexOf(array[i]) >= 0) {
            $scope.emptyArray.push(array[i]);
          }
        }
        return $scope.emptyArray;
      }

      /*
        buildSearchArray()
        Функция, предназначенная для генерации массива выборки
      */

      function buildSearchArray() {
        $scope.searchArray = [];
        var x = $scope.currentSeason,
          y = $scope.currentEpisode;

        $scope.searchArray.push(
          'сезон ' + x + ' серия ' + y + ' ',
          ' ' + x + ' сезон ' + y + ' серия',
          'сезон ' + x + ' / серия ' + y + ' ',
          ' ' + x + ' сезон / ' + y + ' серия',
          'сезон ' + x + ' | серия ' + y + ' ',
          ' ' + x + ' сезон | ' + y + ' серия',
          ' ' + x + ' сезон, серия ' + y + ' ',
          ' ' + x + ' сезон, ' + y + ' серия',
          ' ' + x + ' сезон,' + y + ' серия',
          'сезон ' + x + ', серия ' + y + ' ',
          'Сезон 0' + x + ': Эпизод 0' + y + ' ',
          ' ' + x + ' сезон (' + y + ' серия)',
          's' + x + 'e' + y + ' ',
          '(' + x + ' сезон) (' + y + ' серия)',
          ' ' + x + ' сезон\ ' + y + ' серия'
        );
      }

      buildSearchArray();

      /*
        searchQuery()
        Сборка заголовка видео и поискового запроса
      */
      $scope.searchQuery = $scope.title + ' ' + $scope.currentSeason + ' сезон ' + $scope.currentEpisode + ' серия';

      VK.api('video.search', {
        q: $scope.searchQuery,
        longer: 600
      }, function(data) {
        if (data.response) {
          //проверка на существование объекта на первом этапе
          //console.log(data.response);

          $scope.anotherEpisodPlayer = [];

          for (var i = 0; i < 100; i++) {
            if (data.response[i]) {
              // проверка: не закончились ли количество результатов выдачи
              $scope.issuingSearch = findPartial(data.response[i].title.toLowerCase(), $scope.searchArray);

              if ($scope.issuingSearch[0]) {
                //console.log( $scope.issuingSearch );

                if (!!$scope.episodPlayer) {
                  $scope.anotherEpisodPlayer.push({
                    player: data.response[i].player.replace('http://', 'https://')
                  });
                } else {
                  $scope.episodPlayer = data.response[i].player.replace('http://', 'https://');
                }
              }
            }
          };
          //console.log($scope.episodPlayer);
          //console.log($scope.anotherEpisodPlayer[0].player);
        }
        $scope.$apply();
      });
    };

    $scope.menuBuilder();
    $scope.onLoadPage();
  });
