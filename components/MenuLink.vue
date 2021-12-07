<template>
    <a
        :href="link"
        target="_blank"
        class="bg-pale-leaf-500 text-white capitalize text-3xl font-serif w-full p-8 flex flex-wrap justify-between"
    >
        <slot></slot>
        <DownloadIcon />
    </a>
</template>

<script>
export default {
    props: {
        link: {
            default: '',
            type: String
        }
    }
}
</script>
