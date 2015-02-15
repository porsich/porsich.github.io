'use strict';

angular.module('task13App')
  .controller('MainCtrl', function($scope, $sce) {
    /*
      Блок авторизации во вконтакте
    */
    function authInfo(response) {
      if (response.session.mid) {
        $scope.showForm = true;
        console.log('you\'re auth8');
        console.log('user: ' + response.session.mid);
      } else {
        $scope.showForm = true;
        console.log('not auth');
      }
      console.log($scope.showForm);
    }

    VK.Auth.getLoginStatus(authInfo);

    $scope.login = function(src) {
      VK.Auth.login(authInfo);
    };

    $scope.availableSerials = [{
      title: "Симпсоны",
      name: "the-simpsons",
      genres: "comedy",
      description: "Мультфильм — пародия на американский\
       уклад жизни. Cемейство Симпсонов состоит из пяти членов: папаша Гомер, мать семейства Мардж,\
       их дочери Лиза и Мэгги и несносный подросток Барт.",
      trailer: "https://rutube.ru/video/embed/6189321",
      numberOfSeasons: "26",
      maxNumberOfEpisodes: "25"
    }, {
      title: "Ходячие мертвецы",
      name: "the-walking-dead",
      genres: "horror",
      description: "Сериал рассказывает историю \
      жизни семьи шерифа после того, как «зомби» — эпидемия апокалиптических масштабов захлестнула земной шар. Шериф Рик Граймс путешествует со своей семьей и \
      небольшой группой выживших в поисках безопасного места для жизни. Но постоянный страх смерти каждый день приносит тяжелые потери, заставляя героев почувствовать \
      глубины человеческой жестокости.",
      trailer: "https://www.youtube.com/embed/j6GHvf23QZE",
      numberOfSeasons: "5",
      maxNumberOfEpisodes: "16"
    }, {
      title: "Собака точка ком",
      name: "sobaka-tochka-com",
      genres: "family",
      description: "Любимый многими зрителями комедийный сериал «Собака точка ком» - это отличный вариант \
      досуга для всей семьи. В нем полно доброго юмора, смешных ситуаций из жизни и поучительных кадров.",
      trailer: "https://www.youtube.com/embed/d3ViAOwZRu4",
      numberOfSeasons: "2",
      maxNumberOfEpisodes: "21"
    }, {
      title: "Возвращение Мухтара",
      name: "vozvr-muhtara",
      genres: "detective",
      description: "Это сорок историй о приключениях сотрудников внутренних органов \
      и их верного соратника, служебного пса по кличке Мухтар. Этой сплоченной команде предстоит выполнять самую разную работу: от разоблачения\
      банды наркоторговцев до поиска пропавших вещей.",
      trailer: "https://www.youtube.com/embed/TF_2brDuSJc",
      numberOfSeasons: "8",
      maxNumberOfEpisodes: "40"
    }];

    /*
      $scope.trustSrc
      Метод, предназначенный для вывода видео в iframe
    */

    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }
  });
