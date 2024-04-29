<template>
    <div>
        geoposicioamiento
    </div>
</template>

<script setup>
import { onMounted } from 'vue';


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

</script>

<style lang="scss" scoped>

</style>