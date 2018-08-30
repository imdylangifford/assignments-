var hypeUser = {
  name: "Joe",
  age: "21",
  favoriteBrands: {
    nike: {
      favoriteProducts: {
        blazerLow: {
          price: 80,
          release: 2016
        },
        jordanOne: {
          price: 160,
          release: 1984
        }
      }
    },
    offWhite: {
      favoriteProducts: {
        industrialBelt: {
          price: 200,
          release: 2015
        }
      }
    },
    adidas: {
      favoriteProducts: {
        yeezy500: {
          price: 250,
          release: 2017
        },
        nmdHumanRace: {
          price: 180,
          release: 2015
        },
        sambaClassic: {
          price: 90,
          release: 1975
        }
      }
    }
  },
  userSince: 2012,
  paid: true,
  renewalDate: "August 30th",
  friends: ["Jenny", "John", "Joseph", "Jimothy"],
  getFavorites: function() {
    console.log(this.favoriteBrands);
  }
};
