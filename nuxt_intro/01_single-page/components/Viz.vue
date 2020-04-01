<template>
  <div>
    <Map/>
  </div>
</template>

<script>
import Map from '@/assets/map.svg';

export default {
  name: 'Viz',
  components: {
    Map
  }
}
</script>

<style scoped>
img{
  max-width:100%;
}
div >>> svg {
  max-width:100%;
  max-height: 400px;
}

div >>> .map_svg__circlexx
{
   opacity:0;
   fill:#c0c0c0;
   stroke:#000000;
   stroke-width:0.5;
}

/*
 * Smaller circles around subnational territories: Australian external territories, Chinese SARs, Dutch special municipalities, and French DOMs (overseas regions/departments) [but not French COMs (overseas collectivities)]
 *
 * Change opacity to 1 to display all circles
 */
div >>> .map_svg__subxx
{
   opacity:0;
   fill:#c0c0c0;
   stroke:#000000;
   stroke-width:0.3;
}


/*
 * Land
 * (all land, as opposed to water, should belong to this class; in order to modify the coastline for land pieces with no borders on them a special class "coastxx" has been added below)
 */
div >>> .map_svg__landxx
{
   fill:#00C58E;
   stroke:#ffffff;
   stroke-width:0.5;
   fill-rule:evenodd;
}

/*
 * Styles for coastlines of islands and continents with no borders on them
 * (all of them should also belong to the class "landxx" - to allow for all land to be modified at once by refining "landxx" style's definition further down)
 */
div >>> .map_svg__coastxx
{
   stroke-width:0.2;
}


/*
 * Styles for territories without permanent population (the largest of which is Antarctica)
 *
 * Change opacity to 0 to hide all territories
 */
div >>> .map_svg__antxx
{
   opacity:1;
   fill:#00C58E;
}

div >>> .map_svg__antxx:hover,
div >>> .map_svg__landxx:hover{
  fill: #2F495E;
}

/*
 * Circles around small countries without permanent population
 *
 * Change opacity to 1 to display all circles
 */
div >>> .map_svg__noxx
{
   opacity:0;
   fill:#c0c0c0;
   stroke:#000000;
   stroke-width:0.5;
}


/*
 * Styles for territories with limited or no recognition
 * (all of them - including Taiwan - are overlays (i.e. duplicate layers) over their "host" countries, and so not showing them doesn't leave any gaps on the map)
 *
 * Change opacity to 1 to display all territories
 */
div >>> .map_svg__limitxx
{
   opacity:0;
   fill:#c0c0c0;
   stroke:#ffffff;
   stroke-width:0.2;
   fill-rule:evenodd;
}

/*
 * Smaller circles around small territories with limited or no recognition
 *
 * Change opacity to 1 to display all circles
 */
div >>> .map_svg__unxx
{
   opacity:0;
   fill:#c0c0c0;
   stroke:#000000;
   stroke-width:0.3;
}


/*
 * Oceans, seas, and large lakes
 */
div >>> .map_svg__oceanxx
{
   opacity:1;
   fill:#E5E5E5;
   stroke:#000000;
   stroke-width:0.0;
}
</style>
