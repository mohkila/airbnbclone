export const getExplore = async () => {
  try {
    const res = await fetch(`https://www.jsonkeeper.com/b/4G1G`);
    const exploreData = await res.json();
    return exploreData;
  } catch (error) {
    console.log(error);
  }
};

//

export const getLive = async () => {
  try {
    const res = await fetch(`https://www.jsonkeeper.com/b/VHHT`);
    const liveData = await res.json();
    return liveData;
  } catch (error) {
    console.log(error);
  }
};

//

export const getSearchResult = async()=> {
  try {
    const res = await fetch(`https://www.jsonkeeper.com/b/5NPS`);
    const searchResultData = await res.json();
    return searchResultData;
  } catch (error) {
    console.log(error);
  }
};


// export const getSearchResult = async () => {
//     const apiUrl = "https://www.jsonkeeper.com/b/5NPS";
  
//     try {
//       const res = await fetch(apiUrl);
  
//       // Validate response status
//       if (!res.ok) {
//         throw new Error(`Failed to fetch search results: ${res.statusText}`);
//       }
  
//       const searchResultData = await res.json();
//       return searchResultData; // Return the fetched data
//     } catch (error) {
//       console.log("Error fetching search results:", error.message);
//       return []; // Return an empty array or appropriate fallback
//     }
//   };
  