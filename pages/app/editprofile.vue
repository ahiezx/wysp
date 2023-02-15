<template>
    <div class="container w-1/2 mx-auto">
        <h1 class="text-3xl font-bold">Edit Profile</h1>
        <hr class="mt-2" style="background-color: #333;border:none;height: 2px;">

        <div class="mt-4 flex justify-between">
            <div class="w-full">
                <label for="username" class="block text-sm font-medium text-gray-700 mt-5">Username</label>
                <div class="mt-1">
                    <input type="text" name="username" id="username"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-80 sm:text-sm border-gray-300 h-8"
                        placeholder="Username" v-model="username">
                </div>
            </div>

            <div class="w-full">
                <label for="name" class="block text-sm font-medium text-gray-700 mt-5">Name</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-80 sm:text-sm border-gray-300 h-8"
                        placeholder="Name" v-model="name">
                </div>
            </div>

        </div>


    </div>
</template>

<script>
definePageMeta({
    layout: "app",
});
</script>