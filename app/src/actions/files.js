export const FILE_GROUP_ADD = 'FILE_GROUP_ADD'

export function addFileGroup(group) {
  return {
    type: FILE_GROUP_ADD,
    group
  }
}
