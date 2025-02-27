// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const topFive = [
    {
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Crime', 'Drama'],
        score: 9.3
    },
    {
        title: 'American History X',
        year: 1998,
        director: 'Tony Kaye',
        duration: '1h 59min',
        genre: ['Crime', 'Drama'],
        score: 8.5
      },
    {
        title: 'The Godfather: Part II',
        year: 1974,
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        genre: ['Crime', 'Drama'],
        score: 9
    },
    {
        title: 'Schindler"s List',
        year: 1993,
        director: 'Steven Spielberg',
        duration: '3h 15min',
        genre: ['Biography', 'Drama', 'History'],
        score: 8.9
      },
      {
        title: 'Saving Private Ryan',
        year: 1998,
        director: 'Steven Spielberg',
        duration: '2h 49min',
        genre: ['Drama', 'War'],
        score: 8.6
      }
  ];



// import { topFive } from "./data";

function getAllDirectors(moviesArray) {

    const uniqArrOfDirectors = [];
  
    
    const directorsOnly = moviesArray.map(movie => {
        return movie.director;
    }).forEach(el => {
        if(!uniqArrOfDirectors.includes(el)){
        uniqArrOfDirectors.push(el);
        }
    })

      
    return uniqArrOfDirectors;
  

  }
  
  console.log(getAllDirectors(topFive))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const newArr = moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg');

    console.log(newArr);
   
    if (moviesArray.length === 0) {
        return 0;
    } else if (newArr.length === 0) {
        return 0;
    } else {
        return newArr.length;
    }  
}

console.log(howManyMovies(topFive));
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    let avgScore = moviesArray.reduce((accumulator, currentValue) => {
        if(!currentValue.score) {
            return accumulator;
        } else {
            return accumulator + currentValue.score / moviesArray.length
        }
    }, 0)

    return Number(avgScore.toFixed(2));
 }


console.log(scoresAverage(topFive))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaMovies = moviesArray.filter(movie => {
            return movie.genre.includes('Drama')
    })

    console.log(dramaMovies);

    return scoresAverage(dramaMovies);
}

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedAscAge = [...moviesArray].sort(function (a, b) {
        if (a.year > b.year) return 1; 
        if (a.year < b.year) return -1; 
        if (a.year === b.year) return 0;
      });

      const finalSortedArr = sortedAscAge.sort(function (a, b){
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
      })

    return finalSortedArr;
 
}

console.log(orderByYear(topFive));

// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedAsc = [...moviesArray].sort(function (a, b) {
        if (a.title > b.title) return 1; 
        if (a.title < b.title) return -1; 
        if (a.title === b.title) return 0;
      });

    const sortAscTitleArr = sortedAsc.map(movie => movie.title);

    const firstTwenty = sortAscTitleArr.slice(0, 20);

    if (moviesArray.length < 20){
        return sortAscTitleArr
    } else if (moviesArray.length > 20) {
        return firstTwenty;
    }
}

console.log(orderAlphabetically(topFive))

// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    return moviesArray.map(movie => {
        const duration = movie.duration.split(" ");
        console.log(duration)
        let minutes = 0;
        for (let i = 0; i < duration.length; i++) {
          if (duration[i].includes("h")) {
            minutes += parseInt(duration[i]) * 60;
          } else {
            minutes += parseInt(duration[i]);
          }
        }
        return {
          ...movie,
          duration: minutes
        };
      });
    
}

console.log(turnHoursToMinutes(topFive));

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  
  if (!moviesArray.length) {
    return null;
  }

  const scoresByYear = {};

  moviesArray.forEach(movie => {
    const year = movie.year;
    const score = movie.score;

    console.log(scoresByYear)

    if (!scoresByYear[year]) {
      scoresByYear[year] = [score];
    } 
    else {
      scoresByYear[year].push(score);
    }
  });

  console.log(scoresByYear);
  
  let bestYear;
  let bestAvgScore = 0;

  Object.keys(scoresByYear).forEach(year => {
    const scoresSummed = scoresByYear[year].reduce((acc, score) => acc + score, 0);
    console.log(scoresSummed);
    
    const avgScore = scoresSummed / scoresByYear[year].length;

    console.log(avgScore)

    if (avgScore > bestAvgScore) {
      bestYear = year;
      bestAvgScore = avgScore;
    }
  });

  console.log(bestYear)
  console.log(bestAvgScore);


  return `The best year was ${bestYear} with an average score of ${bestAvgScore}`;

}

console.log(bestYearAvg(topFive));