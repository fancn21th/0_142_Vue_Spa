<template>
  <modal-dialog :show="showDialog" @close="showDialog = false">
    <h1>Hello There</h1>
  </modal-dialog>
</template>

<script>
import ModalDialog from "@/components/ModalDialog";

export default {
  components: {
    ModalDialog
  },
  data() {
    return {
      showDialog: true
    };
  }
};
</script>
