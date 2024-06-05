<script>
  import {authStore} from "$lib/utils/stores.js";
</script>

<div class="w-full rounded-full align-middle text-center p-1 bg-gradient-to-r from-primary to-[#CBDDD9]">
  Hallo {$authStore.user.name} 🫶
</div>