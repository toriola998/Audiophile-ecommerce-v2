<template>
    <div class="bg-grey-2">
        <SharedNavBar />
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
            <SharedProductCategory />
            <SharedAboutUs />
        </main>
        <SharedTheFooter />
    </div>
</template>