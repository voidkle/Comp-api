<template>
<!-- Main modal -->


<div class="relative overflow-x-auto mx-[15%]">
    <div class="flex w-full gap-5">
        <form class="flex items-center" @submit.prevent="toggleSearch">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input v-model="Data.parameter.search" type="text" id="simple-search" class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search name...">
    </div>
    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
        </form>
    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Add data
    </button>
</div>
<div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative rounded-lg shadow bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                <h3 class="text-lg font-semibold text-white">
                    Create New Users
                </h3>
                <button type="button" class="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="crud-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <form class="p-4 md:p-5" @submit.prevent="PostData">
                <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-white">Name</label>
                        <input v-model="Data.createUser.user" type="text" name="user" id="name" class="text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Type your name" required>
                    </div>
                    <div class="col-span-2 sm:col-span-2">
                        <label for="category" class="block mb-2 text-sm font-medium text-white">Backpack</label>
                        <select v-model="Data.createUser.backpackid" id="category" class="text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" required>
                            <option value="12012">12012</option>
                            <option value="12013">12013</option>
                            <option value="12014">12014</option>
                            <option value="12015">12015</option>
                            <option value="12016">12016</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="text-white inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Add new product
                </button>
            </form>
        </div>
    </div>
</div> 
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 my-8">
        <thead class="text-xs uppercase bg-gray-850 text-gray-400 border border-gray-700">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Users
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b bg-gray-800 border-gray-700" v-for="(item, index) in Data.list" :key="index">              
                <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                    <button type="button" @click="toggleAccordion(index)" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 hover:bg-[#00000064] bg-slate-900 gap-3" data-accordion-target="#accordion-collapse-body-1" :aria-controls="'accordion-collapse-body-1'+(index + 1)">
                    <span>{{ item.user }}</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h2>
                <div :id="'accordion-collapse-body-' + (index + 1 )" :class="{ hidden: !item.isExpanded }"  aria-labelledby="accordion-collapse-heading-1">
                    <div class="p-5 border-t-2 border-slate-500">
                    <p class="mb-2 text-lg text-gray-500 dark:text-gray-400">{{ item.backpack[0].backpack }}</p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">{{ item.backpack[0].items }}</p>
                    </div>
                </div>
                </div>
            </tr>
        </tbody>
    </table>
    <nav class="flex gap-3 items-center">
        <ul class="inline-flex -space-x-px text-sm mr-4" >
            <li v-for="(item, index) in Data.pagination" :key="index">
                <a @click="TogglePagination(item.url, item.label)" class="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"><p v-html="item.label"></p></a>
            </li>
        </ul>
        <ul class="inline-flex -space-x-px text-sm mr-4">
            <select v-model="Data.parameter.size" @change="changeSize" class="bg-gray-700 border border-gray-600 text-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 block w-full">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="50">50</option>
            </select>
        </ul>
    </nav>   
</div>
</template>
<script setup lang="ts">
import { Datas } from '../stores/dataMaster'
import {onMounted} from 'vue'
import { initAccordions, initModals } from 'flowbite';

const Data = Datas()

const PostData = async () => {
    console.log(Data.createUser)
    Data.postData().then((res:any) => {
        Data.list = res.data
        Data.pagination = res.links
    })
}

//params function
const toggleAccordion = (index: any) => {
  Data.list[index].isExpanded = !Data.list[index].isExpanded;
};

const toggleSearch = () => {
    Data.getData().then((res:any) => {
        Data.list = res.data
        Data.pagination = res.links
    })
}

const changeSize = () => {
    Data.getData().then((res: any) => {
    Data.list = res.data
    Data.pagination = res.links
  });
};

const TogglePagination = (url: string | null, pageLabel: string) => {
  if (url) {
    if (pageLabel.toLowerCase() === 'next &raquo;') {
      Data.parameter.page += 1
    } else if (pageLabel.toLowerCase() === '&laquo; previous') {
      Data.parameter.page = Math.max(1, Data.parameter.page - 1)
    } else {
      const pageNumber = parseInt(pageLabel)
      Data.parameter.page = pageNumber
    }
    Data.getData().then((res:any) => {
      Data.list = res.data
      Data.pagination = res.links
    });
  }
};


onMounted(() => {
    initAccordions()
    initModals()
    try {
    Data.getData().then((res:any) => {
    Data.list = res.data
    Data.pagination = res.links

  })
    } catch (error) {
    console.log(error)
    throw(error) 
    }
  
})
</script>