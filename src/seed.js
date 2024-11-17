// NOTE: replace 'CrPBfLzlASf8isba1yKpDmT7Hxs1' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: "WQJ7sZkuXnOgNJZ91HRluatWztb2",
      username: "aashish",
      fullName: "Aashish Bharti",
      emailAddress: "jnvpbhmental@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "mukul",
      fullName: "Mukul Gond",
      emailAddress: "mukulgond@gmail.com",
      following: [],
      followers: ["WQJ7sZkuXnOgNJZ91HRluatWztb2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "sundaram",
      fullName: "Sundaram pandey",
      emailAddress: "pandeysundaram@gmail.com",
      following: [],
      followers: ["WQJ7sZkuXnOgNJZ91HRluatWztb2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "asur",
      fullName: "Asur Bharti",
      emailAddress: "bhartiasur@gmail.com",
      following: [],
      followers: ["WQJ7sZkuXnOgNJZ91HRluatWztb2"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/aashish/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "mukul",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "sundaram",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
