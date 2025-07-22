<template >
    <footer>
        <div class="footer_inner">
            <div class="row_btns">
                <button class="row_btn">
                    <FontAwesomeIcon :icon="['fas', 'house']" class="icon" />
                </button>
                
                <button class="row_btn">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="icon" />
                </button>
                
                <button class="row_btn">
                    <font-awesome-icon :icon="['fas', 'plus']" class="icon"/>
                </button>
                
                <button class="row_btn">
                    <font-awesome-icon :icon="['fas', 'film']" class="icon"/>
                </button>
                
                <button class="row_btn" >
                    내프로필
                </button>
            </div>
        </div>
        </footer>
    </template>
<script>
export default {
    
}
</script>
<style >
footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;             
    background-color: white;
    z-index: 999;
    display: flex;
    justify-content: center;
}

.footer_inner{
    width: 100%;
    max-width: 800px;         
    display: flex;
    margin: 0 auto;
    justify-content: center;
    border-top:2px solid black ;
    border-right:2px solid black ;
    border-left:2px solid black ;
}

.row_btns {
    width: 100%;
    display: flex;
    justify-content:space-between;
    gap: 15%;
    padding: 10px 20px;
}

.row_btn{
    border: 0px;
    background: none;
}
</style>