<template>
  <div style="border: 1px solid red; height:100vh" @click="showDialog = true">
    <modal-dialog :show="showDialog" @close="showDialog = false">
      <h1>Hello There</h1>
    </modal-dialog>
    <portal-target name="modals"></portal-target>
  </div>
</template>

<script>
import ModalDialog from '@/components/ModalDialog'

export default {
  components: {
    ModalDialog
  },
  data() {
    return {
      showDialog: true
    }
  }
}
</script>
