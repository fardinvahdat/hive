<template>
    <div class="mt-6 grid grid-cols-4 items-center gap-6">
        <header class="col-span-4 flex lg:items-center justify-between lg:flex-row flex-col gap-4">
            <h2 class="lg:text-2xl text-xl text-Gray-b6 font-medium">Bitcoin Charts</h2>
            <div class="flex items-center gap-2 overflow-x-auto">
                <BaseButton v-for="(item, index) in showModeList" :key="index" @click="showMode = item.value"
                    :class="showMode == item.value ? '' : 'bg-transparent text-Gray-b3'">
                    {{ item.label }}
                </BaseButton>
            </div>
            <div>
                <el-collapse class="block lg:hidden">
                    <el-collapse-item>
                        <template #title>Filters</template>
                        <div class="flex flex-wrap md:flex-row flex-col gap-3">
                            <div class="min-w-[128px] flex flex-col gap-2">
                                <label class="text-sm text-Gray-b4 font-normal">Duration</label>
                                <ClientOnly>
                                    <el-date-picker v-model="filter.duration" type="daterange" range-separator="-"
                                        start-placeholder="Start date" end-placeholder="End date" />
                                </ClientOnly>
                            </div>
                        </div>
                    </el-collapse-item>
                </el-collapse>
                <div class=" flex-wrap md:flex-row flex-col gap-3 lg:flex hidden">
                    <div class="min-w-[128px] flex flex-col gap-2">
                        <!-- <label class="text-sm text-Gray-b4 font-normal">From - To</label> -->
                        <ClientOnly>
                            <el-date-picker v-model="filter.duration" type="daterange" range-separator="-"
                                start-placeholder="From" end-placeholder="To" />
                        </ClientOnly>
                    </div>
                </div>
            </div>
        </header>
        <div class="col-span-4">
            <highchart :options="coinsChartOption" />
        </div>
        <div class="lg:col-span-3 col-span-4 flex flex-col gap-8">
            <div v-for="(item, index) in descriptions" :key="index">
                <h1 class="lg:text-2xl text-xl font-medium text-Gray-b6 mb-4">{{ item.title }}</h1>
                <p class="text-Gray-b4 text-base text-justify">{{ item.description }}</p>
            </div>
        </div>
        <div class="lg:col-span-1 col-span-4">
            <BaseBalanceChange :state="balanceChanges" />
        </div>
    </div>
</template>

<script setup>
import { useChartsStore } from '@/stores/charts'
const { coinsChartOption } = useChartsStore()

const filter = ref({
    duration: ''
})
const showModeList = [
    {
        label: "Day",
        value: 1
    },
    {
        label: "Week",
        value: 2
    },
    {
        label: "Month",
        value: 3
    },
    {
        label: "Year",
        value: 4
    },
    {
        label: "All",
        value: 5
    }
]
const showMode = ref(1)
const descriptions = [
    {
        title: "About Bitcoin",
        description: 'Bitcoin price today is $16,322.66 USD with a 24-hour trading volume of $37,159,833,940 USD. Bitcoin is up 3.16% in the last 24 hours. The current CoinMarketCap ranking is #1, with a market cap of $302,595,476,474 USD. It has a circulating supply of 18,538,368 BTC coins and a max. supply of 21,000,000 BTC coins. The top exchanges for trading in Bitcoin are currently Binance, Huobi Global, CITEX, ZG.com, and Binance.KR. You can find others listed on our crypto exchanges '
    },
    {
        title: "What is Bitcoin?",
        description: 'Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009.Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto’s own words, to allow “online payments to be sent directly from one party to another without going through a financial institution.”Some concepts for a similar type of a decentralized electronic currency precede BTC, but Bitcoin holds the distinction of being the first-ever cryptocurrency to come into actual use.'
    },
    {
        title: "Who Are the Founders of Bitcoin?",
        description: 'Bitcoin’s original inventor is known under a pseudonym, Satoshi Nakamoto. As of 2020, the true identity of the person — or organization — that is behind the alias remains unknown.On October 31, 2008, Nakamoto published Bitcoin’s whitepaper, which described in detail how a peer-to-peer, online currency could be implemented. They proposed to use a decentralized ledger of transactions packaged in batches (called “blocks”) and secured by cryptographic algorithms — the whole system would later be dubbed “blockchain.”Just two months later, on January 3, 2009, Nakamoto mined the first block on the Bitcoin network, known as the genesis block, thus launching the world’s first cryptocurrency.However, while Nakamoto was the original inventor of Bitcoin, as well as the author of its very first implementation, over the years a large number of people have contributed to improving the cryptocurrency’s software by patching vulnerabilities and adding new features.Bitcoin’s source code repository on GitHub lists more than 750 contributors, with some of the key ones being Wladimir J. van der Laan, Marco Falke, Pieter Wuille, Gavin Andresen, Jonas Schnelli '
    },
    {
        title: "What Makes Bitcoin Unique?",
        description: 'Bitcoin’s most unique advantage comes from the fact that it was the very first cryptocurrency to appear on the market.It has managed to create a global community and give birth to an entirely new industry of millions of enthusiasts who create, invest in, trade and use Bitcoin and other cryptocurrencies in their everyday lives. The emergence of the first cryptocurrency has created a conceptual and technological basis that subsequently inspired the development of thousands of competing projects.The entire cryptocurrency market — now worth more than $300 billion — is based on the idea realized by Bitcoin: money that can be sent and received by anyone, anywhere in the world without reliance on trusted intermediaries, such as banks and financial services companies.Thanks to its pioneering nature, BTC remains at the top of this energetic market after over a decade of existence. Even after Bitcoin has lost its undisputed dominance, it remains the largest cryptocurrency, with a market capitalization that fluctuated between $100-$200 billion in 2020, owing in large part to the ubiquitousness of platforms that provide use-cases for BTC: wallets, '
    },
    {
        title: "How Much Bitcoin Is in Circulation?",
        description: 'Bitcoin’s total supply is limited by its software and will never exceed 21,000,000 coins. New coins are created during the process known as “mining”: as transactions are relayed across the network, they get picked up by miners and packaged into blocks, which are in turn protected by complex cryptographic calculations.As compensation for spending their computational resources, the miners receive rewards for every block that they successfully add to the blockchain. At the moment of Bitcoin’s launch, the reward was 50 bitcoins per block: this number gets halved with every 210,000 new blocks mined — which takes the network roughly four years. As of 2020, the block reward has been halved three times and comprises 6.25 bitcoins.Bitcoin has not been premined, meaning that no coins have been mined and/or distributed between the founders before it became available to the public. However, during the first few years of BTC’s existence, the competition between miners was relatively low, allowing the earliest network '
    },
    {
        title: "How Is the Bitcoin Network Secured?",
        description: 'Bitcoin is secured with the SHA-256 algorithm, which belongs to the SHA-2 family of hashing algorithms, which is also used by its fork Bitcoin Cash (BCH), as well as several other '
    }
]
const balanceChanges = [
    {
        firstCol: {
            label: "XRP", value: "312", caption: "Nov, 07, 2018"
        },
        secondCol: {
            label: +30, value: "312", caption: "Nov, 07, 2018"
        }
    },
    {
        firstCol: {
            label: "ETH", value: "312", caption: "Nov, 07, 2018"
        },
        secondCol: {
            label: -20, value: "312", caption: "Nov, 07, 2018"
        }
    },
    {
        firstCol: {
            label: "XRP", value: "312", caption: "Nov, 07, 2018"
        },
        secondCol: {
            label: +30, value: "312", caption: "Nov, 07, 2018"
        }
    },
    {
        firstCol: {
            label: "ETH", value: "312", caption: "Nov, 07, 2018"
        },
        secondCol: {
            label: -20, value: "312", caption: "Nov, 07, 2018"
        }
    },
]
</script>