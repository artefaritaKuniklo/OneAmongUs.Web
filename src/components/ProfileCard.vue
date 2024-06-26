<template>
    <div id="info" class="font-custom fbox-h" v-if="p">
        <!-- Horizontal Alignment of profile pic and the rest -->
        <div id="left" class="fbox-v">
            <img :src="profileUrl" draggable="false" alt="profile">
            <div class="spacer" />
            <div id="buttons" v-if="!screenshotMode">
                <div class="button-container">
                    <el-tooltip content="献花" :show-after="1000" :disabled="flowersGiven || loading.has('flower')">
                        <div class="button anim fbox-vcenter" @click="flower"
                            :class="(flowersGiven || loading.has('flower')) ? 'disabled' : ''">
                            <IEpCheck v-if="flowersGiven" />
                            <IEpLollipop v-else-if="!loading.has('flower')" />
                            <IEpLoading v-else />
                        </div>
                    </el-tooltip>
                    <div class="text-under-button">{{ flowerText }}</div>
                </div>
                <div class="button-container edit">
                    <div class="button anim fbox-vcenter" @click="edit">
                        <IEpEdit />
                    </div>
                    <div class="text-under-button">Edit</div>
                </div>
            </div>
            <div class="spacer-bottom f-grow1" />
        </div>
        <!-- Vertical Alignment of info section -->
        <div id="right">
            <div id="name-box">
                <span id="name-text">{{ p.name }}</span>
                <span id="id">@{{ p.id }}</span>
            </div>
            <div id="hr" />
            <ul id="fields" class="f-grow1">
                <li v-for="info of p.info" :key="info[0]">
                    <span class="key">{{ info[0] }}：</span>
                    <span class="value">{{ info[1] }}</span>
                </li>
            </ul>
            <div id="websites" v-if="p.websites?.length">
                <span id="websites-text">{{ i18n.nav_website }}</span>
                <a v-for="web of p.websites" :key="web[0]" :href="web[1]">
                    <DynamicIcon :icon="web[0]" />
                </a>
            </div>
        </div>

        <img class="watermark" draggable="false" src="/favicon-large.png" alt="" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from "vue-property-decorator";
import { backendHost, replaceUrlVars } from "@/logic/config";
import { abbreviateNumber, getTodayDate } from "@/logic/helper";
import { Person } from "@/logic/data";
import { info } from '@/logic/utils';
import Swal from 'sweetalert2';
import { getLang, i18n } from '@/logic/config';

@Options({ components: {} })
export default class ProfileCard extends Vue {
    @Prop({ required: true }) userid!: string
    @Prop({ required: true }) p!: Person
    @Prop({ default: false }) screenshotMode!: boolean

    flowers = 0
    flowersGiven = false

    loading = new Set<string>()

    i18n = i18n[getLang()];

    created() {
        this.flowersGiven = localStorage.getItem(`last_flower_given@${this.userid}`) === getTodayDate()

        // TODO: Handle errors
        fetch(backendHost + `/flowers/get?id=${this.userid}`)
            .then(it => it.text())
            .then(it => {
                info(`Flowers: ${it}`)
                this.flowers = parseInt(it)
            })
    }

    flower(): void {
        if (this.flowersGiven || this.loading.has('flower')) return

        // TODO: Handle errors
        // TODO: Better user interaction (probably like +1 animation or something)
        this.loading.add('flower')
        fetch(backendHost + `/flowers/give?id=${this.userid}`)
            .then(() => {
                this.flowers += 1

                // Set flowers given
                this.flowersGiven = true
                localStorage.setItem(`last_flower_given@${this.userid}`, getTodayDate())
            })
            .finally(() => this.loading.delete('flower'))
    }

    get flowerText(): string {
        return abbreviateNumber(this.flowers)
    }

    edit(): void {
        Swal.fire({
            title: i18n[getLang()].nav_what_to_edit,
            icon: "question",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: i18n[getLang()].nav_profile_card,
            cancelButtonText: i18n[getLang()].nav_introduction
        }).then((result) => {
            if (result.isConfirmed)
                this.$router.push(`/edit-info/${this.p.id}`);
            else if (result.dismiss === Swal.DismissReason.cancel)
                open(`https://github.com/one-among-us/data/tree/main/people/${this.userid}/page.md`)
        })
    }

    get profileUrl(): string {
        return replaceUrlVars(this.p.profileUrl, this.userid)
    }
}
</script>

<style lang="sass" scoped>
@import "../css/colors"

// Screenshot mode
.screenshot #info
    border-radius: 0
    width: 600px
    height: 314px

    justify-content: center
    align-items: center

    font-size: 1.1em
    filter: none

    #left img
        height: 150px
        width: auto

    img.watermark
        height: 250px

#info
    width: 100%
    background-color: $color-bg-6
    //border: 4px solid $color-text-main
    filter: drop-shadow(0 2px 5px rgba(166, 134, 89, 0.42))
    border-radius: 40px
    animation: fade-in-top 1s 0s ease

    .button svg
        width: 20px
        height: 20px

    // Watermark
    position: relative
    img.watermark
        position: absolute
        z-index: 1
        opacity: 0.08
        height: 90%
        right: 20px
        bottom: 20px
        transform: rotate(13deg)

#right
    display: flex
    flex-direction: column

    flex-grow: 1
    text-align: left
    margin-top: 20px
    margin-right: min(5vw, 50px)
    margin-bottom: 20px
    min-height: 200px
    overflow: hidden

    #name-box
        line-height: normal
        max-width: 60%

        #name-text
            font-size: 1.7em
            font-weight: bold
            margin-right: 8px

    #hr
        width: 100%
        height: 2px
        background-color: $color-text-main
        border-radius: 1px

    #fields
        font-size: 1.1em
        padding: 0
        display: flex
        flex-direction: column
        flex-wrap: wrap
        margin: 10px 0

        white-space: nowrap

        li
            margin-left: 20px

            .key
                font-weight: bold

    #websites
        display: flex
        gap: 10px

        #websites-text
            font-weight: bold
        a
            color: $color-text-main
            text-decoration: none
            display: inline-flex
            align-items: center

#left
    margin-left: min(5vw, 60px)
    margin-right: min(5vw, 50px)
    height: unset

    img
        border: 10px solid white
        outline: 2px solid $color-text-main
        $length: max(110px, min(15vw, 150px))
        height: $length
        width: $length
        transition: all .25s ease
        transform: rotate(-15deg)

    .spacer
        min-height: 30px
        flex-grow: 2

    #buttons
        margin-bottom: 10px

        .button-container
            display: inline-flex
            flex-direction: column

        .button-container:first-child
            margin-right: 20px

        .button
            display: inline-flex
            align-items: center
            font-size: 20px
            width: 40px
            height: 40px
            border: 2px solid $color-text-main
            border-radius: 15px
            background: $color-bg-5

        .button.disabled
            cursor: not-allowed

        .button.disabled:hover
            transform: none
            box-shadow: none

// Phone layout: left becomes top and right becomes bottom
@media screen and (max-width: 570px)
    #info
        flex-direction: column

    #left
        flex-direction: row
        margin-bottom: -40px

        #buttons
            display: flex
            margin-top: 20px
            margin-right: 10px
            order: 1

        //.button-container:first-child
        //    margin-right: 0

        img
            order: 3
            transform: rotate(15deg)
            margin-right: -20px

        .spacer-bottom
            flex-grow: 0

        .spacer
            order: 2

    #right
        margin-left: 5vw
        margin-right: 5vw
        margin-top: 0

// Even smaller screen
@media screen and (max-width: 400px)
    #profile-page
        margin: 0
        padding: 0

        // overflow hack
        // https://stackoverflow.com/questions/6421966/css-overflow-x-visible-and-overflow-y-hidden-causing-scrollbar-issue
        overflow: hidden
        margin-top: -50px
        padding-top: 50px

        #content, #comments
            margin: 10px

    #info
        margin-right: 0
        margin-left: 0
        border-radius: 0

    #left
        img
            height: 90px
            width: 90px
            border: 5px solid white
            outline: 2px solid $color-text-main

        .button-container.edit
            display: none !important

        #buttons
            .button-container
                flex-direction: row

            .text-under-button
                margin-left: 5px
                margin-top: 8px

            .button
                font-size: 15px
                width: 30px
                height: 30px

</style>
