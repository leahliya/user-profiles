var userCtrl= require('./userCtrl.js');
var profiles = [
    {
      name: 'Preston McNeil',
      pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
      status: 'Everything is bigger in Texas'
    },
    {
      name: 'Ryan Rasmussen',
      pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
      status: 'RR Rules'
    },
    {
      name: 'Terri Ruff',
      pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
      status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
    },
    {
      name: 'Lindsey Mayer',
      pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
      status: 'OMG MITTENS DID THE CUTEST THING TODAY'
    }
  ];
  // module.exports = {
  //   // getFriendsProfiles: (req, res, next) => {
  //   //   let ArrayOfFriendObjects = [];
  //   //   if (profile.body.name) {
  //   //   res.json(users.filter(user => user.friends[i] === profile.body.name)) ; 
  //   //   ArrayOfFriendObjects.push(user.friend[i]);
  //   //   // 
  //   //   return {
  //   //     currentUser: profile.body.user,
  //   //     friends: ArrayOfFriendObjects
  //   //   };
  //   getFriendsProfiles = (req, res, next) => {
  //     for (var key in users) {
  //         if (req.session.currentUser.name === users[key].name) {
  //             res.send({
  //                 currentUser: req.session.currentUser,
  //                 friends: users[key].friends
  //               });
  //         }
  //         else { res.send('ERROR');}
  //     }
  module.exports = {
    getFriendsProfiles: function(req, res) {
      var theUser = req.session.currentUser;
      var friendArray = [];
      for (var i = 0; i < theUser.friends.length; i++) {
        for (var j = 0; j < profiles.length; j++) {
          if (profiles[j].name === theUser.friends[i]) {
            friendArray.push(profiles[j])
          }
        }
      }
      res.send({
        currentUser: req.session.currentUser,
        friends: friendArray
      })
    }
  };
  