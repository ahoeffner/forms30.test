import { Custom as CustomRequest, Query} from "futureforms";


export class Custom extends CustomRequest
{
   public async getLocations(countries:Query, locations:Query) : Promise<any>
   {
      let request:any =
      {
         Custom:
         {
            type: "Locations",
            countries: countries.getBasicRequest(true),
            locations: locations.getBasicRequest(true)
         }
      }

      return(super.execute(request));
   }
}