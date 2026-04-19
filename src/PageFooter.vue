<script setup>

</script>

<template>
    <div className="pagefooter">
        <p>&copy; <i>Patrick Stanek</i>, {{ new Date().getFullYear() }}</p>
        <a href="github.com/ptstanek">[ Github Profile ] </a>
    </div>
</template>

<style scoped>
.pagefooter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    padding-top: 10px;
    text-decoration: none;
}

.pagefooter a {
    text-decoration: none;
}
</style>