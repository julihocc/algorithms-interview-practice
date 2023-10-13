import pytest

from survivalFish import survivalFish


@pytest.mark.parametrize(
    "fish_array, expected_result",
    [
        ([-1, -1], 2),
        ([1, 1], 2),
        ([-1, 1], 2),
        ([2, -1], 1),
        ([1, -2], 1),
        ([-2, 6, 1, -7, -5, 4, 3], 5),
        ([-2, 6, 1, -7, -5, 4, -3], 4),
    ],
)
def test(fish_array, expected_result):
    actual_result = survivalFish(fish_array)
    assert actual_result == expected_result
