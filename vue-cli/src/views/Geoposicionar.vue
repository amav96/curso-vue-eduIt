<template>
    <div>
        geoposicioamiento
    </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted } from 'vue';


let id;
let target;
let options;

function success(pos) {
  const crd = pos.coords;
    console.log(crd)
}

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

target = {
  latitude: 0,
  longitude: 0,
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

onMounted(() => {
    id = navigator.geolocation.watchPosition(success, error, options);
})

onBeforeUnmount(() => {
    if(id){
        console.log(id)
        navigator.geolocation.clearWatch(id);
        console.log("paramos la observacion")
    }

})

</script>

<style lang="scss" scoped>

</style>