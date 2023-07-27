<script lang="ts">
  import StandardCard from "../standardCard.svelte";
</script>

<StandardCard
  headerColor="bg-orange-400"
  bodyColor="bg-white"
  title="Technical Director at Viva Labs [2018-2021]"
>
  <p class="text-lg">
    From 2018 to 2021 I worked at Viva Labs building a white-label smart home
    platform. I started as an Embedded Developer, developing the firmware that
    runs of the smart home hubs. These were either screenless Linux machines or
    Android devices. They all had either zigbee, z-wave or both, Wi-Fi,
    Bluetooth and some had ethernet. I was a part of developing drivers for all
    these protocols and client software communicating with our AWS cloud over
    MQTT.
    <br /><br />
    After a year I took over the CTO position when the founder/CTO decided to pursue
    other things. As CTO I also had personnel responsibilities for 13 Employees and
    several consultants. I also wrote a lot of backend code in Java, managed our
    AWS servers and did a lot of App development on our hybrid Javascript/Swift/Kotlin
    app.
  </p>
  <br /><br />
  <h2 class="text-lg font-bold">Some of the coolest projects I did in Viva:</h2>
  <h2 class="text-lg">
    Tailored Android OS to run as a smart home device frontend:
  </h2>
  <p class="text-lg">
    Tight integration into the Viva platform, Kiosk mode, customizing the
    dropdown-menus, adapting zigbee-drivers to run on Android, update services,
    device onboarding flow etc.
  </p>
  <br />

  <h2 class="text-lg">
    Developed built-in Alexa support on an Android device:
  </h2>
  <p class="text-lg">
    Adapt Alexa SDK to run on device, built messaging system between OS and
    Alexa SDK, collaborate with hardware vendor to optimize audio and hardware
    configuration for Alexa, Amazon Alexa certification etc.
  </p>
  <br />

  <h2 class="text-lg">Built MQTT-support into our app:</h2>
  <p class="text-lg">
    For a smart home system running on MQTT, it was beneficial to add leverage
    this app side as well due to its amazing speed. On completion, feedback
    speed on for example turning on a light was reduced from average ~1.5 sec to
    ~0.2 sec which makes it feel almost instant.
  </p>

  <h1 class="pt-4 font-semibold">Tags:</h1>
  <div class="space mt-2 flex flex-row flex-wrap">
    Linux, C, C++, MQTT, AWS, Java, AWS, IoT, Wi-Fi, Zigbee, Z-wave, Alexa,
    Kotlin
  </div></StandardCard
>
