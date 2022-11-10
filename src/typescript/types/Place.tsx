enum PlaceType {
  CoffeeShop = "CoffeeShop",
}

enum AmenityType {
  Wifi = "Wifi",
  WorkFriendly = "WorkFriendly",
  Outlets = "Outlets",
}

interface Amenity {
  type: AmenityType;
  comment: any;
  rating: number;
}

interface Location {
  latitude: string;
  longitude: string;
}

interface Review {
  uid: string;
  comment: string;
  amenitiesRating: Amenity[];
}

export class Place {
  type: PlaceType;
  amenities: Amenity[];
  location: Location[];
  reviews: Review[];
  images: any;

  constructor(place: Place) {
    this.type = place.type;
    this.amenities = place.amenities;
    this.location = place.location;
    this.reviews = place.reviews;
  }
}
