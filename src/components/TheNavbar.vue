<template>
    <div id="navbar">
        <b-navbar toggleable="lg" sticky="true" type="dark" variant="dark">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">About Me</b-nav-item>
                <b-nav-item href="#">Services</b-nav-item>
                <b-nav-item href="#">Contact</b-nav-item>
                <b-nav-item href="#">Blog</b-nav-item>
                <b-nav-item href="#">Skills</b-nav-item>
                <b-nav-item href="#">Projects</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'TheNavbar'
}
</script>

<style>

</style>