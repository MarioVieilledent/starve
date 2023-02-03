<script lang="ts">
  import { onMount } from "svelte";
  import { getJson } from "../services/http";

  let inputElem: HTMLElement;

  let inputMessage: string = "";
  let messagesList: Message[] = [];

  onMount(async () => {
    inputElem = document.getElementById("input");
    getJson("messages", (data) => {
      messagesList = data as Message[];
    });
  });

  function sendMessage(event: any) {
    if (event.key === "Enter") {
      const mes: string = event.target.value;
      inputMessage = "";
      inputElem.focus();
    }
  }

  interface Message {
    date: string;
    author: string;
    content: string;
  }
</script>

<div class="container fc">
  <div class="messages fc" />
  <div class="input f">
    <input
      id="input"
      on:keyup={(event) => sendMessage(event)}
      type="text"
      bind:value={inputMessage}
    />
  </div>
</div>

<style lang="scss">
  $input-height: 36px;

  .container {
    width: 100%;
    height: 100%;

    .messages {
      width: 100%;
      height: calc(100% - $input-height);
    }

    .input {
      width: 100%;
      height: $input-height;
      align-items: center;
      justify-content: center;

      input {
        box-sizing: border-box;
        margin: 0;
        padding: 3px 6px;
        border: 0px;
        width: calc(100% - 12px);
        height: calc(100% - 12px);
        border-radius: 6px;
      }
    }
  }
</style>
