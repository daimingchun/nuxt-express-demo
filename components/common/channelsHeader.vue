<template>
    <div>	
        <mt-header :title="title">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="indexicon icon-searchbar" slot="right">这里少一个搜索按钮</mt-button>
            <i class="indexicon icon-searchbar"></i>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
    	</mt-header>
    </div>
</template>
