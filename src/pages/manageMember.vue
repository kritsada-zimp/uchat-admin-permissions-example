<template>
    <div>
        <h2>Manage Members</h2>
        <div style="margin-top: 20px;">
            <h5>Use Can</h5>
            <Can I="create" a="Member">
                <q-btn color="primary" label="Add Member" @click="createMember" />
            </Can>
            <div style="padding-right: 5px;"></div>
            <Can I="delete" a="Member">
                <q-btn color="red" label="Delete Member" @click="deleteMember" />
            </Can>
        </div>
        <div style="margin-top: 20px;">
            <h5>Use v-if</h5>
            <button v-if="can('create', 'Member')" @click="createMember">Add Member</button>
            <button v-if="can('delete', 'Member')" @click="deleteMember">Delete Member</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAbility } from '@casl/vue';
const { can } = useAbility();

const createMember = () => {
    alert('Creating member...')
}

const deleteMember = () => {
    alert('Deleting member...')
}
</script>

<style scoped></style>