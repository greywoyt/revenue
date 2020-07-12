const apiKey = 'J9jz9eW-ilBU9oH39WblPrBSiMUo3vybJpM3BwdtcLDYnGf9-xJ2geTzhUuUWZZ8lVXgbkSwwWvPKLWfS4cdMQVHL3rweiaZMizdp4CHWnDTL1-4iJ4No7bEDLEIX3Yx';

const Yelp = {
    search(term, location, sortBy) {
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const endPoinUrl =  'https://api.yelp.com/v3/businesses/search';
        const urlToFeath = `${cors}${endPoinUrl}?term=${term}&location=${location}&sort_by=${sortBy}`;
        const apiHeaders = {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }
        return featch(urlToFeath, apiHeaders).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
               return jsonResponse.businesses.map(business => {
                   return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories.title,
                    rating: business.rating,
                    reviewCount: business.review_count
                   }
               });
            }
        })
    }
};

export default Yelp;