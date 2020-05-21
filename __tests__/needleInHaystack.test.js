const { needleHaystack } = require("../needleInHaystack");

const haystack = {
  name: "Northcoders",
  description: "Awesome coding bootcamp",
  staff: {
    tutors: "James and Chris",
    support: "Louise",
  },
  contactDetails: {
    web: "https://northcoders.com",
    phone: "",
    address: {
      office: "Northcoders, Gold 67, The Sharp Project, Manchester",
      postcode: "M40 5BJ",
    },
  },
  reviews: {
    april: {
      chris: "I love Northcoders",
      james: "It is awesome!",
    },
    may: {
      louise: "Northcoders is a fantastic coding bootcamp",
    },
  },
};

describe("needleInHaystack()", () => {
  it("should return an empty array if needle does not exist", () => {
    const needle = "Sausages";
    expect(needleHaystack(haystack, needle)).toEqual([]);
  });
  it.only("should return an empty array if needle does not exist", () => {
    const needle = "m40";
    expect(needleHaystack(haystack, needle)).toEqual([
      "contactDetails.address.postcode",
    ]);
  });
  it("should return an empty array if needle does not exist", () => {
    const needle = "coding";
    expect(needleHaystack(haystack, needle)).toEqual([
      "description",
      "reviews.may.louise",
    ]);
  });
  it("should return an empty array if needle does not exist", () => {
    const needle = "NorThcOdErs";
    expect(needleHaystack(haystack, needle)).toEqual([
      "contactDetails.address.office",
      "contactDetails.web",
      "name",
      "reviews.april.chris",
      "reviews.may.louise",
    ]);
  });
});
