const apiKey = 'J9jz9eW-ilBU9oH39WblPrBSiMUo3vybJpM3BwdtcLDYnGf9-xJ2geTzhUuUWZZ8lVXgbkSwwWvPKLWfS4cdMQVHL3rweiaZMizdp4CHWnDTL1-4iJ4No7bEDLEIX3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return featch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`)
    }
};