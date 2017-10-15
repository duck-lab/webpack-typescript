<template>
  {{#element}}<el-button>{{else}}<button>{{/element}}
  \{{btnText}}
  {{#element}}</el-button>{{else}}</button>{{/element}}
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class TypedButton extends Vue {
  name: String = 'typed-button'
  btnText: String = 'TypedButton'
  hello () {
    console.log('hello from TypedButton')
  }
}
</script>

<style>

</style>

