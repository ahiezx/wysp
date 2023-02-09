<template>
    <div class="app-search" ref="appSearch">
        <input type="text" placeholder="Search" v-model="searchTerm" @input="debounceSearch" />
        <i class="fas fa-search"></i>
    </div>
    <div class="app-search-results text-sm" v-if="searchTerm !== ''" @click.stop="preventPropagation"
        ref="appSearchResults">
        <ul v-if="results.length > 0">
            <li v-for="result in results" :key="result.id">
                <router-link @click="() => { searchTerm = ''; results = [] }" :to="`/app/user/${result.username}`">{{
                    result.username
                }}</router-link>
            </li>
        </ul>
        <div v-else>
            <p class="text-neutral-400 text-sm">No results found</p>
        </div>
    </div>
</template>
  
<script>
import _ from 'lodash';
export default {
    data() {
        return {
            searchTerm: "",
            results: []
        };
    },
    mounted() {
        document.addEventListener("click", this.onClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener("click", this.onClickOutside);
    },
    methods: {
        async search() {
            if (this.searchTerm.length === "") {
                this.results = [];
                return;
            }
            const response = await fetch(`http://localhost:4000/search?username=${this.searchTerm}`);
            const data = await response.json();
            if (data.status != 0 && data.results) {
                this.results = data.results;
            } else {
                this.results = [];
            }
        },
        debounceSearch: _.debounce(function () {
            this.search();
        }, 250),
        onClickOutside(event) {
            if (
                !this.$refs.appSearch.contains(event.target)
                //   !this.$refs.appSearchResults.contains(event.target)
            ) {
                this.searchTerm = "";
                this.results = [];
            }
        },
        preventPropagation(event) {
            event.stopPropagation();
        }
    }
};
</script>
<style>
.app-search-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    color: black;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    z-index: 999;
    width: 30%;
    margin: auto;
}
</style>