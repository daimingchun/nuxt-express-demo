<template>
    <div>	
        <mt-header :title="title">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="indexicon icon-searchbar" slot="right">收藏button</mt-button>
            <mt-button icon="indexicon icon-searchbar" slot="right">分享button</mt-button>
    	</mt-header>
    </div>
</template>
