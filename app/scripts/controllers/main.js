'use strict';

/**
 * @ngdoc function
 * @name task13App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the task13App
 */
angular.module('task13App')
  .controller('MainCtrl', function ($scope) {
    $scope.availableSerials = [
      {name: "Interny", title: "Интерны", poster: "../images/interny.jpg", genres: "comedy", description: "Главные герои ситкома — интерны.\
      Они все время попадают в идиотские ситуации, а их руководитель доктор Быков с удовольствием\
      за этим наблюдает.", trailer: "http://vk.com/video-80802801_171086689"},
      {name: "The Simpsons", title: "Симпсоны", poster: "../images/simpsons.jpg", genres: "comedy", description: "Мультфильм — пародия на американский\
       уклад жизни. Cемейство Симпсонов состоит из пяти членов: папаша Гомер, мать семейства Мардж,\
       их дочери Лиза и Мэгги и несносный подросток Барт.", trailer: "http://vk.com/video6093177_168531023"},
      {name: "Dom-2", title: "Дом-2", poster: "../images/dom-2.jpg", genres: "horrors", description: "«Дом-2» — российское реалити-шоу. На проект\
      приходят молодые люди, как девушки, так и парни. Молодые люди приходят на «Дом-2», чтобы\
      найти и построить свою любовь.", trailer: "http://vk.com/video140811064_170212093"},
      {name: "Constantine", title: "Константин", poster: "../images/constantine.jpg", genres: "horrors", description: "Бывалый охотник на демонов и\
      оккультист Джон Константин специализируется на задании жару аду. Вооруженный таинственными знаниями\
      темных искусств и своим острым умом, он ведет неравную борьбу…", trailer: "http://vk.com/video-56760507_169547200"},
      {name: "Top Gear", title: "Топ Гир", poster: "../images/top-gear.jpg", genres: "documentary", description: "Джереми, Ричард и Джеймс с\
      неподражаемым юмором рассказывают о самых значимых и интересных новинках автомобильного мира.",
      trailer: "http://vk.com/video92907529_170962721"},
      {name: "MythBusters", title: "Разрушители легенд", poster: "../images/mythbusters.jpg", genres: "documentary",
      description: "В нашей жизни существует множество разных легенд, поверий, интернетовских слухов или\
      других мифов. И вот чтобы доказать или опровергнуть все эти истории, за дело берутся эксперты Адам\
      Сэвидж и Джэми Хайнеман, а что из этого выходит, можно увидеть в каждом выпуске программы…",
      trailer: "http://vk.com/video23638571_167002854"},
      {name: "Vozvrashhenie Muhtara", title: "Возвращение Мухтара", poster: "../images/muhrar.jpg", genres: "detective", description: "Это сорок\
      историй о приключениях сотрудников внутренних органов и их верного соратника, служебного пса по\
      кличке Мухтар. Этой сплоченной команде предстоит выполнять самую разную работу: от разоблачения\
      банды наркоторговцев до поиска пропавших вещей.", trailer: "http://vk.com/video-18114589_145579289"},
      {name: "Supernatural", title: "Сверхъестественное", poster: "../images/supernatural.jpg", genres: "horrors",
      description: "Сериал рассказывает о приключениях братьев Сэма и Дина Винчестеров, которые\
      путешествуют по Соединённым Штатам на чёрном автомобиле Chevrolet Impala 1967 года, расследуют\
      паранормальные явления, многие из которых основаны на американских городских легендах и фольклоре,\
      и сражаются с порождениями зла, такими как демоны и призраки.", trailer: "http://vk.com/video184898664_163262710"}
      ];
  });
