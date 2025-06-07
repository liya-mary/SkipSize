export default{
    getSkipDetails:async function(){
        const url="https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";
        try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            // console.log(json);
            return json;
        } catch (error) {
            console.error(error);
        }
    }
}