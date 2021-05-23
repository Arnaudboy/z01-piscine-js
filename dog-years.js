function dogYears(planet = "earth", seconds) {
    const earthYear = 31557600;
    switch(planet) {
        case "earth": 
            seconds /= earthYear;
            break;
        case "mercury" : 
            seconds /= (earthYear * 0.2408467 );
            break;
        case "venus" : 
            seconds /= (earthYear * 0.61519726 );
            break;
        case "mars" :  
            seconds /= (earthYear * 1.8808158  );
            break;
        case "jupiter" : 
            seconds /= (earthYear * 11.862615);
            break;
        case "saturn" : 
            seconds /= (earthYear * 29.447498 );
            break;
        case "uranus" : 
            seconds /= (earthYear * 84.016846 );
            break;
        case "neptune" : 
            seconds /= (earthYear * 164.79132);
            break;
    }
    return Math.round((seconds*=7)*100)/100;
}