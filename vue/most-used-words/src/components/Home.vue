<template>
    <v-container fluid>
        <div class="pills">
            <Pill v-for="word in groupedWords" :key="word.name"
              :name="word.name" :amount="word.amount"/>
        </div>
    </v-container>
</template>

<script>
import Pill from './Pill';

export default {
    components: { Pill },
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