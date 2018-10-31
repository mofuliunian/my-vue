<template>
    <div class="dashboard">
        <div class="picBox" :style="`width: 100%; height: ${clientHeight}px`">
            <div class="mark"></div>
        </div>
        <div :style="`height: ${clientHeight}px`">
        </div>
        <div class="content">
            ffff
        </div>
    </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      clientHeight: 0
    }
  },
  mounted () {
    this.clientHeight = document.body.clientHeight;
  }
}
</script>

<style scoped>
    .dashboard {
        width: 100%;
        height: 100%;
        overflow: auto;
        position: relative;
    }

    .picBox {
        background: url('../assets/1.png') no-repeat 50%;
        background-size: cover;
        position: fixed;
    }
    .mark{
        width: 100%;
        height: 100%;
        background-image: url('data:image/gif;base64,R0lGODlhAgACAIABAAAAAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjJDQjM0NzIzRUU4MTFFNzkyMzhGQjE2OTBBM0I3MDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjJDQjM0NzMzRUU4MTFFNzkyMzhGQjE2OTBBM0I3MDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMkNCMzQ3MDNFRTgxMUU3OTIzOEZCMTY5MEEzQjcwMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMkNCMzQ3MTNFRTgxMUU3OTIzOEZCMTY5MEEzQjcwMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAEALAAAAAACAAIAAAICRF4AOw==')
    }
    .content{
        background: #fff;
        height: 1000px;
        position: relative;
        z-index: 666;
    }
</style>
