// Ref : https://dev.to/ifeanyichima/typeerror-cannot-read-properties-of-undefined-reading-foreach-1i72
const relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends : () => {
        var that = this;
        this.friends.forEach(friend => {
            console.log(that.name, friend);
        });
    },
  };
  relationship1.logFriends();

// const relationship2 = {
//     name: 'zero',
//     friends: ['nero', 'hero', 'xero'],
//     logFriends : () => {
//         this.friends?.forEach(friend => {
//             console.log(this.name, friend);
//         });
//     },
//   };
//   relationship2.logFriends();