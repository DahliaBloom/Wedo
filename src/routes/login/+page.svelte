<script>
    import {base} from "$app/paths"
    import {authHandlers} from "$lib/utils/stores.js"

    let name = "";
    let password = "";
    let onGoingAuth = false;

    async function handleAuth() {
        if (name && password && !onGoingAuth) {
            onGoingAuth = true;
            try {
                await authHandlers.signIn(name.toLowerCase() + "@m.com", password);
            } catch (error) {
                console.log("Auth error", error);
            }
            onGoingAuth = false;
        }
    }
</script>

<div class="h-screen flex flex-col justify-center items-center gap-16">
    <img src="{base}/icon.svg" alt="" class=""/>
    <form>
        <div class="space-y-2">
            <label class="input input-bordered flex items-center gap-2">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="w-4 h-4 opacity-70"
                >
                    <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                    />
                </svg
                >
                <input
                        bind:value={name}
                        type="text"
                        class="grow"
                        placeholder="Name"
                />
            </label>
            <label class="input input-bordered flex items-center gap-2">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="w-4 h-4 opacity-70"
                >
                    <path
                            fill-rule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clip-rule="evenodd"
                    />
                </svg
                >
                <input
                        bind:value={password}
                        type="password"
                        class="grow"
                        placeholder="Password"
                />
            </label>
            <button
                    on:click={handleAuth}
                    class="btn btn-neutral rounded-full w-full text-white"
                    type="submit"
            >
                <p class="font-thin text-base-100">Login</p>
                {#if onGoingAuth}
                    <span class="loading loading-spinner" style="width: 0.6rem;"
                    ></span>
                {/if}
            </button>
        </div>
    </form>
</div>

<style lang="postcss">
    label {
        border-color: transparent;
        border-width: 1.5px;
        border-radius: 9999px;
    }

    label:focus-within {
        border-color: oklch(var(--n));
        outline: none;
        box-shadow: none;
    }
</style>
