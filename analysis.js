// Helpers
function isEven(number) {
    return (number % 2 === 0);
  }
  
 
  function calculateArithmeticMean(list) {
    const sumList = list.reduce(
      function (accumulatedValue = 0, newElement) {
        return accumulatedValue + newElement;
      }
    );
    const averageList = sumList / list.length;
    return averageList;
  }
   
  // Median calculator
  function medianWages(list) {
    const half = parseInt(list.length / 2);
  
    if (isEven(list.length)) {
      const person1 = list[half - 1];
      const person2 = list[half];
  
      const mediana = calculateArithmeticMean([person1, person2]);
      return mediana;
    } else {
      const personsHalf = list[half];
      return personsHalf;
    }
  }
  
  // Mediana General
  const worldSalaries = world.map(
    function (person) {
      return person.salary;
      // return person.country;
    }
  );
  
  const worldSalariesSorted = worldSalaries.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
  );
  
  const WorldMedianaGeneral = medianWages(worldSalariesSorted);
  
  // Mediana del top 10%
  const spliceStart = (worldSalariesSorted.length * 90) / 100;
  const spliceCount = worldSalariesSorted.length - spliceStart;
  
  const WordlSalriesTop10 = worldSalariesSorted.splice(
    spliceStart,
    spliceCount,
  );
  
  const WorldMedianaTop10 = medianWages(WordlSalriesTop10);

  const salaryAve = document.getElementById("salaryAve");
    salaryAve.innerText = `${WorldMedianaGeneral}`


  const worldTop10 = document.getElementById("worldTop10");
    worldTop10.innerText = `${WorldMedianaTop10}`

  console.log({
    WorldMedianaGeneral,
    WorldMedianaTop10, 
  });


