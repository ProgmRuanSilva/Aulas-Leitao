<template>
    <v-container fluid>
        <div class="pills">
            <Pill-Item v-for="word in groupedWords" :key="word.name"
              name="teste" amount="10"/>
        </div>
    </v-container>
</template>

<script>
import PillItem from './PillItem';

export default {
    components: {PillItem},
    data: function() {
        return {
            groupedWords: [
                { name: 'you', amout: 900},
                { name: 'he', amout: 853},
                { name: 'i', amout: 1234},
            ]
        }
    }
}
</script>

<style>

</style>