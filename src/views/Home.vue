<template>
  <div>
    <modal-dialog :show="showDialog" @close="showDialog = false">
      <h1>Hello There</h1>
    </modal-dialog>
    <button type="button" class="btn btn-blue" @click="showDialog = true">
      显示 Modal Dialog
    </button>
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
      showDialog: false
    }
  }
}
</script>
